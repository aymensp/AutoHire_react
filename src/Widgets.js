import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
    
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Web development is back", 'Top news - 9099 readers')}
            {newsArticle("Coronavirus: South African Updates", 'Top news - 886 readers')}
            {newsArticle("Tesla hits new highs: South African", 'Cars & auto - 300 readers')}
            {newsArticle("Bitcoin Breaks $22k", 'Crypto - 8000 readers')}
            {newsArticle("is Redux too good?", 'Code - 123 readers')}
            {newsArticle("More React JS Courses", 'Top news - 5798 readers')}
            {newsArticle("JavaScript online Tutorials", 'Programming - 2000 readers')}
            {newsArticle("IT Internships: Graduate Programmes", 'Information Technology - 256 readers')}
            {newsArticle("The new Audi: South African", 'Cars & auto - 700 readers')}
            {newsArticle("AWS rises", 'AWS Developer  - 8000 readers')}
            {newsArticle("is Redux too good?", 'Code - 123 readers')}
            {newsArticle("More React JS Courses", 'Top news - 5798 readers')}
        </div>
        
    )
}

export default Widgets
