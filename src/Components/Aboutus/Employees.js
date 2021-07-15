function Employees({employees}) {

    let employeeRows = employees.map((employee, index) => {
    
        return (
            <tr key={index}>
                <td>
                    <img src={employee.image} className="img-fluid" style={{maxHeight: '100px'}} />
                </td>
                <td>{employee.name}</td>
            </tr>
        )
    })


    return (
        <table style={{width: '50%'}}>
            <thead>
                <tr>
                    <th></th>
                    <th>Our best employees</th>
                   
                </tr>
            </thead>
            <tbody>
                {employeeRows}
            </tbody>
        </table>
    )
}

export default Employees;