const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
  console.log('>>> check props: ', params.id)

  return <div>View Detial Blog With Duy Nghia Dev = {params.id}</div>
}

export default ViewDetailBlog
