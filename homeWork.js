let dataArray;

fetch('https://api-gateway.fullstack.edu.vn/api/blog-posts/featured')
.then(function(res){
    dataArray = res;
})
.catch(function(err){
    console.error(err);
})