const url ={
    BASE_URL:"https://localhost:7191/api",
    USER:{
        LOGIN:"/auth/login",
        REGISTER:"/auth/register",
        PROFILE:"/auth/profile",
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