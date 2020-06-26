import React from 'react';
import '../index.css';
import Table from 'react-bootstrap/Table'

const SortEdata = (Edatas, config = null) => {
    const [sortConfig, setfilterconfig] = React.useState(config);

    const filtereddata = React.useMemo(() => {
        let filtereddata = [...Edatas];
        if (sortConfig !== null) {
            filtereddata.sort((x, y) => {
                if (x[sortConfig.key] <y[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (x[sortConfig.key] > y[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1
                }
                return 0;
            });
        }
        return filtereddata;
    }, [Edatas, sortConfig]);

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setfilterconfig({key, direction});
    };
    return {Edatas: filtereddata, requestSort, sortConfig};
}

const EmployeeTable = (props => {
    const {Edatas, requestSort, sortConfig} = SortEdata(props.employeedata)
    const getClassNamesfor = (Employeenum) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === Employeenum ? sortConfig.direction : undefined;
    };
    return(
        <Table>
            <thead>
                <tr>
                    <th>
                        <button type="button" onClick={() => requestSort('Employeenum')} className={getClassNamesfor('Employeenum')}>
                            Employee #
                        </button>
                    </th>
                    <th>
                        <button type="button" onClick={() => requestSort('Frstname')} className={getClassNamesfor('Frstname')}>
                            First Name
                        </button>
                    </th>
                    <th>
                        <button type="button" onClick={() => requestSort('Lstname')} className={getClassNamesfor('Lstname')}>
                            Last Name
                        </button>
                    </th>
                    <th>
                        <button type="button" onClick={() => requestSort('Email')} className={getClassNamesfor('Email')}>
                            Email
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {Edatas.map(Edata => (
                    <tr key={Edata.id}>
                        <td>{Edata.Employeenum}</td>
                        <td>{Edata.Frstname}</td>
                        <td>{Edata.Lstname}</td>
                        <td>{Edata.Email}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
});

export default function App() {
    return(
        <div>
            <EmployeeTable
            employeedata={[
                { id: 1, Employeenum: 1, Frstname: "Austin", Lstname: "Pigg", Email: "austin_pigg@yahoo.com" },
                { id: 2, Employeenum: 2, Frstname: "Brad", Lstname: "Brewer", Email: "BBrewer@yahoo.com" },
                { id: 3, Employeenum: 3, Frstname: "Joey", Lstname: "Schoendorf", Email: "JSchoendorf@yahoo.com" },
                { id: 4, Employeenum: 4, Frstname: "Mia", Lstname: "Romano", Email: "MiaRomano@yahoo.com" },
                { id: 5, Employeenum: 5, Frstname: "Deven", Lstname: "Castoria", Email: "DCastoria@yahoo.com" },
                { id: 6, Employeenum: 6, Frstname: "Carson", Lstname: "Page", Email: "CPage@yahoo.com" },
                { id: 7, Employeenum: 7, Frstname: "Juan", Lstname: "Peralta", Email: "JPeralta@yahoo.com" },
                { id: 8, Employeenum: 8, Frstname: "Becca", Lstname: "Romano", Email: "BeccaRomano@yahoo.com" },
                { id: 9, Employeenum: 9, Frstname: "Caroline", Lstname: "Scott", Email: "CScott@yahoo.com" },
                { id: 10, Employeenum: 10, Frstname: "Alex", Lstname: "King", Email: "AKing@yahoo.com" }
            ]}
            />
        </div>
    )
}