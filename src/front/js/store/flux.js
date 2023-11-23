const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white",
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white",
                },
            ],
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({
                        message: data.message,
                    });
                    // don't forget to return something, that is how the async resolves
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo,
                });
            },
            crearUsuario: async (email, password, name, last_name) => {
                try {
                    let newUser = {
                        email: email,
                        password: password,
                        name: name,
                        last_name: last_name,
                    };
                    let response = await fetch(process.env.BACKEND_URL + "/api/user", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newUser),
                    });
                    if (!response.ok) {
                        throw new Error("No se ha creado el usuario");
                    }
                    const data = await response.json();
                    return true;
                } catch (error) {
                    console.log("Error al crear usuario", error);
                    return false;
                }
            },
            loginUser: async(email, password, name, last_name) =>{
                try{
                    let response = await fetch(process.env.BACKEND_URL + "/api/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + sessionStorage.getItem("token")
                        },
                        body: JSON.stringify({email:email, password:password, name:name, last_name:last_name}),
                    });
                    const data = await response.json()
                    sessionStorage.setItem("token", data.token)
                    
                    return data


                }catch(error){console.log(error)}

            },
            private: async() =>{
                const token = sessionStorage.getItem("token")
                const resp = await fetch(process.env.BACKEND_URL + "/api/private", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + token
                    },
            });

            }
        },
    };
};

export default getState;