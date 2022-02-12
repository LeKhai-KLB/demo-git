function CourseItemComponent({
    image_url = '',
    title = '',
    meta_description = '',
    reactions_count = '',
}, key = ''){

    return (
        <div key = {key} className = "post-item">
            <img className = "post-thump" src={image_url} alt={title}/>
            <h2 className = "post-title">{title}</h2>
            <p className = "post-desc">{meta_description}</p>
            <p className = "post-count">{reactions_count}</p>
        </div>
    )

}

fetch('https://api-gateway.fullstack.edu.vn/api/blog-posts/featured')
.then(function(res){
    return res.json();
})
.then(function(promise){

    const featureData = promise.data;

    let courses = featureData.map((course, index) => 
        <CourseItemComponent
            image_url = {course.image_url}
            title = {course.title}
            meta_description = {course.meta_description}
            reactions_count = {course.reactions_count}
            key = {index}
        />
    )

    function App(){
        return courses
    }

    ReactDOM.render(<App/>, document.getElementById('root'))
})
.catch(function(err){
    console.error(err);
})


