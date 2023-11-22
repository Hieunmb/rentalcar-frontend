const url ={
    BASE_URL:"https://localhost:7191",
    USER:{
        LOGIN:"/api/auth/login",
        REGISTER:"/api/auth/register",
        PROFILE:"api/auth/profile",
    },
    CAR:{
        LIST:"/car",
        DETAIL:"/car/get-by-id",
        CREATE:"/car/create",
        UPDATE:"/car/update",
        DELETE:"/car/delete"
    },
    RENTAL:{
        LIST:"/rental",
        DETAIL:"/rental/get-by-id",
        CREATE:"/rental/create",
        UPDATE:"/rental/update",
        RENTAL:"/rental/delete"
    }
}
export default url;