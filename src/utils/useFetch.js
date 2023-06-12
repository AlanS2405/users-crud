import { useState } from "react"
import axios from "axios"

const useFetch = (baseUrl) => {

    const [infoApi, setInfoApi] = useState()

    //READ
    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
            .then(res => setInfoApi(res.data))
            .catch(err => console.log(err))
    }

    //CREATE
    const createNewRegister = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
            .then(res => {
                console.log(res.data),
                setInfoApi([...infoApi, res.data])
            })
            .catch(err => console.log(err))
    }

    //DELETE
    const deleteRegister = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
            .then(res => {
                console.log(res.data)
                const infoApiFiltered = infoApi.filter(element => element.id !== id)
                setInfoApi(infoApiFiltered)
            })
            .catch(err => console.log(err))
    }


    //UPDATE
    const updateRegister = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.put(url, data)
            .then(res => {
                console.log(res)
                const infoApiUpdated = infoApi.map(element => {
                    if (id === element.id) {
                        return data
                    } else {
                        return element
                    }
                })
                setInfoApi(infoApiUpdated)
            })
            .catch(err => console.log(err))
    }

    return [infoApi, getApi, createNewRegister, deleteRegister, updateRegister]
}

export default useFetch
