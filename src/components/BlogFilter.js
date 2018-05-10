import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setTextFilter, sortByTitle, sortByDate } from '../actions/filters';

const BlogFilter = (props) => {
    return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input 
                        type="text"
                        placeholder="Search in Blogger"
                        value={props.filters.text}
                        onChange={(event) => {
                            props.setTextFilter(event.target.value)
                        }}
                    />
                </div>
                <div className="input-group__item">
                    <select 
                        value={props.filters.sortBy}
                        onChange={(event) => {
                            if (event.target.value === 'title') {
                                props.sortByTitle();
                            } else if (event.target.value === 'date') {
                                props.sortByDate();
                            }
                        }}
                    >
                        <option value="title">Sort posts by title</option>
                        <option value="date">Sort by by date</option>
                    </select>
                </div>
                <div className="input-group__item">
                    <Link className="button button--link button--text-black" to="/create"><p>Add Post</p></Link>
                </div>
            </div>
        </div>
        
    );
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByTitle: () => dispatch(sortByTitle()),
    sortByDate: () => dispatch(sortByDate())
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogFilter);