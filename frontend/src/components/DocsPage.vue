<template>
  <div class="d-flex">
    <nav>
      <ul>
        <li v-if="selectedSection === 'section1'" class="active"><a v-on:click="selectedSectionChanged('section1')" href="#section1">Introductions</a></li>
        <li v-else><a v-on:click="selectedSectionChanged('section1')" href="#section1">Introductions</a></li>
        <li v-if="selectedSection === 'section2'" class="active"><a v-on:click="selectedSectionChanged('section2')" href="#section2">Examples</a></li>
        <li v-else><a v-on:click="selectedSectionChanged('section2')" href="#section2">Examples</a></li>
        <li v-if="selectedSection === 'section3'" class="active"><a v-on:click="selectedSectionChanged('section3')" href="#section3">Dev info</a></li>
        <li v-else><a v-on:click="selectedSectionChanged('section3')" href="#section3">Dev info</a></li>
      </ul>
    </nav>
    <div>
      <section id="section1">
        <div class="introduction-div">
          <h1 class="text-left">Introduction</h1>
          <div class="text-left">
            <p>
              With HelpETH, you can easily implement opt-in donations into your web3 app. Choose a charity from our list or select one of your choice.
            </p>
            <p>
              With the implementation of EIP-4337, users of your app can opt-in for a donation by simply ticking a checkbox, without the need to perform another transaction. Donations and fees can be covered with DAI.
            </p>
          </div>
        </div>
      </section>
      <section id="section2">
        <div class="examples-div">
          <h1>Examples</h1>
          <div>
            <div>
              <pre class="text-left">
                <code>

                </code>
              </pre>
            </div>
            <div></div>
          </div>
          <div></div>
          <pre class="text-left">
          <code>
          &lt;nav&gt;
            &lt;ul&gt;
              &lt;li&gt;&lt;a href="#section1"&gt;Introductions&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#section2"&gt;Examples&lt;/a&gt;&lt;/li&gt;
              &lt;li&gt;&lt;a href="#section3"&gt;Dev info&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
          &lt;/nav&gt;
        </code>
        </pre>
        </div>
      </section>
      <section id="section3">
        <h1>Dev info</h1>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const selectedSection = ref('')
function selectedSectionChanged(section) {
  this.selectedSection = section
}
</script>

<style scoped>
nav {
  width: 24rem;
  text-align: start;
  list-style-type: none;
}

ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style-type: none;
  padding-top: 1.5rem;
  position: sticky;
  top: 0;
  margin: 2rem;
  bottom:20px;
  z-index:999;
}

.d-flex {
  display: flex;
}

.text-left {
  text-align: left;
}

section {
  padding: 3rem 10rem 3rem 5rem;
}

.introduction-div {
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  padding: 2rem 3rem;
}

.examples-div {
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  padding: 2rem 3rem;
}

li {
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.5);
  border-radius: 28px;
  padding: 0.5rem 1rem;
}

li:hover {
  background: blueviolet;
}

a {
  color: #2c3e50;
  text-decoration: none;
}

nav li.active {
  background-color: rgba(0,0,0,.5)
}
</style>
