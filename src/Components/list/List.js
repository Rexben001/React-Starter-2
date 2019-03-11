import React, { Component } from 'react';
import './List.css'

class List extends Component {
    state = {
        loading: false,
        error: null,
        currencies: []
    }
    componentDidMount() {
        this.setState({ loading: true });

        fetch('https://api.udilia.com/coins/v1/cryptocurrencies?page=&perPage-20')
            .then(response => response.json())
            .then(result => {
                this.setState({ currencies: result.currencies, loading: false })
            })
            .catch(error => {
                this.setState({ error: error.errorMessage, loading: false })
            })
    }
    changePercent(percent) {
        if (percent > 0) {
            return <span>{percent} &uarr;</span>
        } else {
            return <span>{percent} &darr;</span>
        }
    }
    render() {
        const { loading, error, currencies } = this.state;
        if (error) {
            return (<p>error</p>)
        }
        if (loading) {
            return (<p>Loading...</p>)
        }
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>cryptocurrencies</th>
                            <th>Price</th>
                            <th>Market Cap</th>
                            <th>24H change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currencies.map(data => {
                            return (<tr key={data.id}>
                                <td>{data.rank} {data.name}</td>
                                <td>$ {data.price}</td>
                                <td>$ {data.marketCap}</td>
                                <td>{this.changePercent(data.percentChange24h)}</td>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List;