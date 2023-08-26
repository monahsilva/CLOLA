import React, { Componet } from 'react'

export class FetchAppointment extends Componet {
    static displayName = FetchAppointment.name;

    constructor(props) {
        super(props);
        this.state = { appointments: [], loading: true };
    }

    componentDidMount() {
        this.populateAppointmentsData();
    }

    static renderAppointmentsTable(appointments) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Pet</th>
                        <th>Dono</th>
                        <th>Contato</th>
                        <th>Serviço</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map(appointment =>
                        <tr key={appointment.id}>
                            <td>{appointment.date}</td>
                            <td>{appointment.pet.name}</td>
                            <td>{appointment.owner.name}</td>
                            <td>{appointment.owner.phone}</td>
                            <td>{appointment.service.name}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    handleAgendarClick() {
        console.log("entrei aqui");
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Carregando...</em></p>
            : FetchAppointment.renderAppointmentsTable(this.state.appointments);

        return (
            <div>
                <h1 id="tabelLabel" >Agendamentos</h1>
                <p>Agendamentos feitos para o dia de hoje.</p>
                <button title="Criar um novo agendamento" onClick={handleAgendarClick}>Agendar</button>
                {contents}
            </div>
        );
    }

    async populateAppointmentsData() {
        const response = await fetch('appointments')
            .catch(error => console.log(error));
        const data = await response.json();
        this.setState({ appointments: data, loading: false });
    }
}