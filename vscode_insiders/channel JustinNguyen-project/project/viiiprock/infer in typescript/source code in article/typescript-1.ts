interface Admin {
  role: string;
}

interface User {
  name: string;
}

interface SchoolAdmin extends Admin {
  name: string;
}

type PermisstionType = SchoolAdmin extends Admin ? "admin" : "normal";
