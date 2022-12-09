<!-- eslint-disable prettier/prettier -->
<template>
  <div class="container">
    <button class="headlines" onclick="show('description')">Description</button>
    <button class="userreviews" onclick="show('review')">Reviews</button>
  </div>
  <div class="accordion">
    <div class="hidden-p">
      <p id="description" class="hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi et
        ratione esse. Tenetur et sapiente, voluptates voluptatem minus laborum.
        Autem delectus recusandae magni, deserunt ab a illo! Nihil, iure
        voluptatem.
      </p>
      <p id="review" class="hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
      </p>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  align-content: center;
}
.accordion {
  padding-left: 30px;
  display: flex;
}
.headlines,
.userreviews {
  color: grey;
  display: flex;
}
button {
  border: none;
  color: grey;
  background-color: white;
  font-size: small;
  padding: 20px 30px 20px 0px;
  border-bottom: grey 1px solid;
}
button:first-child {
  margin-left: 30px;
}
button :active {
  color: salmon;
  border-bottom: salmon 1px solid;
}
.hidden-p {
  color: grey;
  text-align: left;
}
</style>
