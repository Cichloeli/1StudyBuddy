<template>
<div id="container">
    <h1>Upload File</h1>
    <label class="upload-group">
        <!-- let's you select a file from your computer -->
        <input type="file" class="upload-group" id="file">
    </label>
    <button type="btn btn-primary" id="uploadButton" onclick="uploadFile()">Submit</button>
</div>    
</template>

<script>
</script>

<style>
#container{
    margin-top: 40px;
}
h1{
    font-size: 30px;
    text-align: left;
}
label.upload-group{
    width: 60px;
    height: 20px;
    margin-right: 1050px;
    border-style: solid;
    border-color: lightgray;

}
#uploadButton{
    margin-right: 1050px;
    margin-top: 15px;    
}
</style>
