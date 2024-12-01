import TableUser from "./components/table.user";

const CRUDPage = async ({ searchParams }: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {

    const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0b2tlbiBsb2dpbiIsImlzcyI6ImZyb20gc2VydmVyIiwiX2lkIjoiNjRkMWM0OTYxNmE3Nzc2YjExOThiZjcyIiwiZW1haWwiOiJob2lkYW5pdEBnbWFpbC5jb20iLCJhZGRyZXNzIjoiVmlldE5hbSIsImlzVmVyaWZ5Ijp0cnVlLCJuYW1lIjoiSSdtIEjhu49pIETDom4gSVQiLCJ0eXBlIjoiU1lTVEVNIiwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjk5ODg3MjAxLCJleHAiOjE2OTk5NDcyMDF9.uRu532mUUJlWtZEQ0IGRhvIYNiZ5232VBo2gY-qMKMU";
    const LIMIT = 5;
    const page = Number(searchParams?.page) || 1;

    const res = await fetch(
        `http://localhost:8000/api/v1/users?current=${page}&pageSize=${LIMIT}&sort=-updatedAt`,
        {
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                "Content-Type": "application/json",
            },
            next: { tags: ['listUsers'] }
            // cache: 'no-store'
        })

    const raw = await res.json();

    return (
        <div style={{ padding: "50px" }}>
            <TableUser
                raw={raw}
                access_token={ACCESS_TOKEN}
            />
        </div>
    )
}
export default CRUDPage;