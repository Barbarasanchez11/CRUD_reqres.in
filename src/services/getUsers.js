

const headers = { headers: {
          'x-api-key': 'reqres-free-v1'
        }
    }

async function getUsers (pageNumber) {
      const response = await axios.get(`https://reqres.in/api/users?page=${pageNumber}`, headers);
    return mapResponse(response)

}


function mapResponse (response) {

    return respones.map(data => {
       return {
            firstName: data.first_name
        }
    })

}


export default getUsers