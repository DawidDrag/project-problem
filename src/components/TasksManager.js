import React from 'react';

const apiUrl = ' http://localhost:3000/data'

class TasksManager extends React.Component {
    state = {
        tasks: [],
    }

    onClick = () => {
        const { tasks } = this.state;
        console.log(tasks)
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { value } = e.target.elements[0]
        console.log(value)

        const data = {
            name: 'sdfsdfsd',
            time: '',
            isRunning: '',
            idDone: '',
            isRemoved: '',

        }

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'applications/json' }
        }

        fetch(apiUrl, options)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
    }




    render() {
        return (
            <>
                <h1 onClick={this.onClick}>TasksManager</h1>

                <form onSubmit={this.onSubmit}>
                    <input className='input' name='task' ></input>
                    <button className='button'>Dodaj zadanie</button>
                </form>

            </>
        )
    }
}

export default TasksManager;