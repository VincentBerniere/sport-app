import React, { Component } from 'react';
import unsplash from '../../../../api/unsplash.js';

class Search extends Component {
    state = { term: '', data: [], loading: false, delayTimer: null };

    onSearchInputChange = event => {
        const term = event.target.value;
        this.setState({ term: term });

        if (this.state.delayTimer) {
            this.setState({ 
                delayTimer: clearTimeout(this.state.delayTimer)
            });
        }

        if (term) {
            this.setState({ 
                delayTimer: setTimeout(() => {
                    this.searchUsers(term);
                }, 1000)
            }); 
        } else {
            this.setState({ users: [] });
        }
    }

    searchUsers = async (term) => {
        this.setState({ loading: true });

        const response = await unsplash.get('/search/users', {
            params: { query: term }
        });

        this.setState({ data: response.data });
        this.setState({ loading: false });
    }

    renderSearchContent() {
        if (this.state.term && this.state.data && this.state.data.total >= 0) {
            if (this.state.data.total > 0) {
                const users = this.state.data.results.map((user) => {
                    return (
                        <a key={user.id} className="result">
                            <div className="content">
                                <div className="title">{user.name}</div>
                            </div>  
                        </a>
                    );
                });

                return (
                    <div className="results transition visible">
                        <div className="category">
                            <div className="name">Utilisateurs</div>
                            <div className="results transition visible">
                                {users}
                            </div>
                        </div>
                    </div>
                );
            } else {
                return (
                    <div className="results transition visible">
                        <div className="message empty">
                            <div className="header">Aucun résultat</div>
                            <div className="description">Votre recherche n'a abouti à aucun résultat.</div>
                        </div>  
                    </div>
                );
            }
        }
    }

    render() {
        return (
                <div className={`ui search category
                    ${this.state.loading ? 'loading' : ''}`}>

                    <div className="ui icon input">
                        <i className="search icon"></i>
                        <input 
                            type="text" 
                            placeholder="Recherche" 
                            value={this.state.term}
                            onChange={this.onSearchInputChange} 
                        />
                    </div>

                    {this.renderSearchContent()}
                </div>
        );
    }
}

export default Search;