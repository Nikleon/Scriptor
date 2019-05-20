import React, {Component} from 'react';
import './_Components.css';

class Search extends Component {
    state = {
        query: '',
        department: '',
        course: '',
        professor: '',
        quarter: '',
        showFilters: false
    };

    change = e => {
        this.setState({[e.target.name]: e.target.value}, this.updateFilters);
    }

    updateFilters() {
        if(this.state.query.length > 0) {
            this.setState({showFilters: true});
        } else {
            this.setState({showFilters: false});
        }
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }
    
    handleEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
         }
    }
    
    render() {                   
        let filters;
        if(this.state.showFilters) {
            filters = 
                <div className='filters'>
                    <div className='filterinputs'>
                        <input 
                            type = 'text'
                            className ='filterbar' 
                            name = 'department'
                            value = {this.state.department} 
                            onChange={e => this.change(e)} 
                            onKeyDown={e => this.handleEnter(e)}/>
                        <input 
                            type = 'text'
                            className ='filterbar' 
                            name = 'course'
                            value = {this.state.course} 
                            onChange={e => this.change(e)} 
                            onKeyDown={e => this.handleEnter(e)} />
                        <input 
                            type = 'text'
                            className ='filterbar' 
                            name = 'professor'
                            value = {this.state.professor} 
                            onChange={e => this.change(e)} 
                            onKeyDown={e => this.handleEnter(e)} />
                        <input 
                            type = 'text'
                            className ='filterbar' 
                            name = 'quarter'
                            value = {this.state.quarter} 
                            onChange={e => this.change(e)} 
                            onKeyDown={e => this.handleEnter(e)} />
                    </div>
                    <p style={{marginTop: '5px'}}>Department</p>
                    <p>Course</p>
                    <p>Professor</p>
                    <p>Quarter</p>
                    
                </div>
        } else {
            filters = null;
        }

        return (
            <div className={this.state.showFilters ? 'searchform active' : 'searchform'}>
                <form className='col-xs-1 text-center'>
                    <h1 className='title'>SCRIPTOR</h1>
                    <input 
                    type = 'text'
                    className ='searchbar' 
                    name = 'query'
                    placeholder = 'What do you want to learn?'
                    value = {this.state.query} 
                    onChange={e => this.change(e)} />
                    <br></br>
                    {filters}
                    <button className='center' onClick={e => this.onSubmit(e)}>Search</button>
                    
                </form> 
            </div>
        )
    }
}

export default Search;