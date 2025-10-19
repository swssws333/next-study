'use server';
// 通过添加'use server'，您可以将文件中的所有导出函数标记为服务器操作
// 这些服务器函数随后可以导入并用于客户端和服务器组件。
// 此文件中包含的任何未使用的函数都将自动从最终的应用程序包中移除。


// 您也可以通过在操作中添加内容，直接在服务器组件中编写服务器操作"use server"。
// 但在本课程中，我们将所有操作组织在一个单独的文件中。
// 我们建议您为您的操作创建一个单独的文件。

import {z} from 'zod'
import postgres from 'postgres';
import {revalidatePath} from 'next/cache';
import { redirect } from 'next/navigation';

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
})

const CreateInvoice = FormSchema.omit({id: true, date: true});

export async function createInvoice(formData: FormData) {
  const {customerId, amount, status} = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  // 以美分为单位存储
  const amountInCents = amount * 100;
  // 创建日期
  const date = new Date().toISOString().split('T')[0];
  // const rawFormData = Object.fromEntries(formData.entries());
  // Test it out:
  // console.log(rawFormData);

  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // We'll also log the error to the console for now
    console.error(error);
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
  // 一旦数据库更新，/dashboard/invoices路径将重新验证，并从服务器获取新数据。也就是破坏客户端的缓存，从新从服务端拉取数据
  revalidatePath('/dashboard/invoices');
  // 重定向到这个路径
  redirect('/dashboard/invoices');
}


// Use Zod to update the expected types
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  const amountInCents = amount * 100;

  try {
    await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;
  } catch (error) {
    // We'll also log the error to the console for now
    console.error(error);
    return;
  }

  revalidatePath('/dashboard/invoices');
  // redirect方法必须在 try catch 以后调用，因为这个方法会抛出一个错误
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  await sql`DELETE FROM invoices WHERE id = ${id}`;
  // 调用revalidatePath将触发新的服务器请求并重新呈现表格。
  revalidatePath('/dashboard/invoices');
}

