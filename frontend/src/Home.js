import React, { useEffect, useState } from 'react'
import './App.css'


const Home = () => {

    const [table, setTable] = useState([])

    // const port = 'http://localhost:5000' 
    const port = 'https://hexa-two.vercel.app/' 

    const getresult = async () => {
        const response = await fetch(port, {
            method: 'GET',
        })

        const json = await response.json();
        setTable(json);

    }

    useEffect(() => {
        getresult();

    }, [])



    const renderlist = table.map((ele) => {

        const { id, name, username, email, address, phone, website, company } = ele;
        const { street, suite, city, zipcode, geo } = address
        const { lat, lng } = geo
        const { catchPhrase, bs } = company



        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>
                    <tr>
                        <th>street</th>
                        <td>{street}</td>
                    </tr>
                    <tr>
                        <th>suite</th>
                        <td>{suite}</td>
                    </tr>
                    <tr>
                        <th>city</th>
                        <td>{city}</td>
                    </tr>
                    <tr>
                        <th>zipcode</th>
                        <td>{zipcode}</td>
                    </tr>
                    <tr>
                        <th>geo</th>
                    </tr>
                    <tr>
                        <th>lat</th>
                        <td>{lat}</td>
                    </tr>
                    <tr>
                        <th>lng</th>
                        <td>{lng}</td>
                    </tr>
                </td>
                <td>{phone}</td>
                <td>{website}</td>
                <td>
                    <tr>
                        <th >name</th>
                        <td>{company.name}</td>
                    </tr>
                    <tr>
                        <th >catchPhrase</th>
                        <td>{catchPhrase}</td>
                    </tr>
                    <tr>
                        <th >bs</th>
                        <td>{bs}</td>
                    </tr>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <table style={{ width: "100%" }}>
                <tr>

                    <th>id</th>
                    <th>email</th>
                    <th>username</th>
                    <th>email</th>
                    <th>address</th>
                    <th>phone</th>
                    <th>website</th>
                    <th>company</th>
                </tr>
                {renderlist}
            </table>
        </div>
    )
}

export default Home