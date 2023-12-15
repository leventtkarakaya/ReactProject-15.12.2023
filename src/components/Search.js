import React, { Component } from 'react'

export class Search extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            keyword: ''
        }
    }
    onChange(event) {
        this.setState({
            keyword: event.target.value
        })
    }
    onSubmit(event) {
        event.preventDefault()
        console.log(event);
        if (this.state.keyword === "") {
        this.props.setAlert("Lütfen bir karakter giriniz")
        }else{
            this.props.searchUsers(this.state.keyword);
            this.setState({
                keyword: ''
            })
        }
    }
    render() {
        
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                
                    <div className='container'>
                        <div className='flex items-center justify-center flex-col'>
                            <input type="text" className='bg-[#918e8e] mt-5 px-10 py-2 outline-none rounded-md' onChange={this.onChange} value={this.state.keyword} />
                            <div>
                                <button type='submit' className='font-bold font-sans text-base'>Search</button>
                            </div>
                        </div>
                    </div>
                </form>
                {this.props.showClear && <div className='flex items-center justify-center '><button className=' bg-slate-400 text-white px-5 py-2 rounded-sm' onClick={this.props.clearUsers}>Clear Result</button></div>}
            </div>
        )
    }
}

export default Search