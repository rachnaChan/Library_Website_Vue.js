<template>
    <!-- <div class="w-screen flex-col">
        <div class="w-screen h-screen bg-image bg-cover bg-center bg-no-repeat">
            <div class="w-full h-[80px] bg-white"></div>
            <div class="flex flex-col justify-center px-[20px] w-full bg-image bg-cover bg-center bg-no-repeat" style="background-image: url('./public/bg.jpg'); height: calc(100vh - 80px)">
                <div class="flex-1 flex items-center justify-center">
                    <div class="w-3/4 h-[60px] bg-white"></div>
                </div>
                <div class="flex-3">d</div>
            </div>
        </div>
    </div> -->
    <div class="w-screen h-[80px] bg-white"></div>
    <div class="cover-wrapper">
        <div class="search-wrapper">
            <div class="search-item">
                <input type="text" placeholder="Search for book by keyword ...">
                <button>Search</button>
            </div>
        </div>
        <div class="book-wrapper">

        </div>
    </div>
</template>

<style>
    .cover-wrapper{
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        background-image: url('./public/bg.jpg');
        width: 100%;
        height: calc(100vh - 80px);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
    .search-wrapper{
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search-item{
        background: #fff;
        width: 75%;
        height: 44px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        padding: 0 25px;
        justify-content: space-between;
        gap: 5px;
    }
    .search-item input{
        outline: none;
        font-size: 16px;
        flex-grow: 1;
    }
    .search-item button{
        border: none;
        background: rgb(67, 148, 141);
        padding: 0 28px;
        color: #fff;
        border-radius: 10px;
        font-weight: 600;
    }
    .book-wrapper{
        width: 100%;
        flex: 3;
    }
</style>