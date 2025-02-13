import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import CustomersTable from '@/app/ui/customers/table';
import { fetchCustomersPages, fetchFilteredCustomers } from '@/app/lib/data';
 
export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?:number;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const customers = await fetchFilteredCustomers(query,currentPage);
  const totalPages = await fetchCustomersPages(query);
  return (
    <div className="w-full">
      <CustomersTable customers={customers}/>
      <div className="mt-5 flex w-full justify-center">
        {<Pagination totalPages={totalPages} />}
      </div>
    </div>
  );
}