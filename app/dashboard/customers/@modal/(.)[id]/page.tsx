import { notFound } from "next/navigation";
import CustomerModal from "@/components/customers/CustomerModal";
import CustomerHeader from "@/components/customers/CustomerHeader";
import CustomerDetail from "@/components/customers/CustomerDetail";
import { getCustomerById } from "@/services/customer.service";

export default async function CustomerModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const customer = await getCustomerById(id);

  if (!customer) {
    notFound();
  }

  return (
    <CustomerModal title={customer.name}>
      <div className="space-y-4">
        <CustomerHeader customer={customer} />
        <CustomerDetail customer={customer} />
      </div>
    </CustomerModal>
  );
}
