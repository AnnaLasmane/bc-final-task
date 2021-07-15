function Employees() {

    let employeeRows = employees.map((employees, index) => {
    
        return (
            <tr key={index}>
                <td>
                    <img src={employees.image} className="img-fluid" style={{maxHeight: '75px'}} />
                </td>
                <td>{employees.title}</td>
              
             
            </tr>
        )
    })


    return (
        <table style={{width: '100%'}}>
            <thead>
                <tr>
                    <th></th>
                    <th>Our best employee</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {employeeRows}
            </tbody>
        </table>
    )
}

export default Employees;