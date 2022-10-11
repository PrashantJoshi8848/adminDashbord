export const usercolumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 130,
    renderCell: (params) => {
      return (
        <>
          <div className="cellWithImg">
            <img className={"cellImg"} src={params.row.image} alt="Avatar" />
            {params.row.userName}
          </div>
        </>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "title", headerName: "Title", width: 130 },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRow = [
  {
    userName: "prashant",
    id: 1,
    title: "delectus aut autem",
    status: "Active",
    image:
      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
    email: "joshiprasahnt@gmail.com",
  },
  {
    userName: "hari",
    id: 2,
    title: "quis ut nam facilis et officia qui",
    status: "Active",
    image:
      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
    email: "hari@gmail.com",
  },
  {
    userName: "shyam",
    id: 3,
    title: "fugiat veniam minus",
    status: "Active",
    image:
      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
    email: "shyam@gmail.com",
  },
  {
    userName: "ram",
    id: 4,
    title: "et porro tempora",
    status: "Pending",
    image:
      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
    email: "ram@gmail.com",
  },
  {
    userName: "karan",
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    status: "Active",
    image:
      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
    email: "Karan@gmail.com",
  },
  {
    userName: "bharat",
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    status: "Active",
    image:
      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
    email: "bharat@gmail.com",
  },
  {
    userName: "shakti",
    id: 7,
    title: "illo expedita consequatur quia in",
    status: "Passive",
    image:
      "https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg",
    email: "shakti@gmail.com",
  },
];
