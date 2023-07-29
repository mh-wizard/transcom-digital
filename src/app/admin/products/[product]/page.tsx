export default function Product({ params }: { params: { id: string } }) {
  console.log(params.id);

  return <>Product</>;
}
