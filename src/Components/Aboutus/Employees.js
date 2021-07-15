function Employees({employees}) {

    let employeeRows = employees.map((employee, index) => {
    
        return (
            <tr key={index}>
                <td>
                    <img src={employee.image} className="img-fluid" style={{maxHeight: '75px'}} />
                </td>
                <td>{employee.title}</td>
              
             
            </tr>
        )
    })


    return (
        <table style={{width: '100%'}}>
            <thead>
                <tr>
                    <th></th>
                    <th>Our best employees</th>
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