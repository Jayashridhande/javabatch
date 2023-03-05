
        let fetchData =fetch("https://jsonplaceholder.typicode.com/users")
        .then((Response)=>{
            console.log(Response);
            return Response.json();
        })
        .then((result)=> {
            console.log(result);

        })
        console.log(fetchData);
