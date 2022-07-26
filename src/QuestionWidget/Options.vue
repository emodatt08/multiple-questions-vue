<template>
  <div id="option-wrapper">
    Enter option
    <input type="text" id="option" name="option" placeholder="Enter option">
    <button id="option-btn">Add</button>

    <div id="options">
        <div id="option-item">
            <div>1</div>
            <button>Edit</button>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'Options'
    }
</script>

<style>
    #option-wrapper {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
    }
    #option {
        padding: 5px
    }
    #option-btn {
        width: 20%;
        padding:8px 0;
        margin-top: 10px;
        background-color: rgb(134, 210, 202);
        border: transparent;
        border-radius: 5px;
    }
    #options {
        margin-top: 50px;
    }
    #option-item{
        display: flex;
        justify-content: space-between;
    }
</style>