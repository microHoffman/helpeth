<template>
  <div class="d-flex">
    <nav>
      <ul>
        <li v-if="selectedSection === 'section1'" class="active"><a v-on:click="selectedSectionChanged('section1')" href="#section1">Introductions</a></li>
        <li v-else><a v-on:click="selectedSectionChanged('section1')" href="#section1">Introductions</a></li>
        <li v-if="selectedSection === 'section2'" class="active"><a v-on:click="selectedSectionChanged('section2')" href="#section2">Description</a></li>
        <li v-else><a v-on:click="selectedSectionChanged('section2')" href="#section2">Descripion</a></li>
        <li v-if="selectedSection === 'section3'" class="active"><a v-on:click="selectedSectionChanged('section3')" href="#section3">Charity List</a></li>
        <li v-else><a v-on:click="selectedSectionChanged('section3')" href="#section3">Charity List</a></li>
      </ul>
    </nav>
    <div>
      <section id="section1">
        <div class="introduction-div">
          <h1 class="text-left">Introduction</h1>
          <div class="text-left">
            <h2>Donate Toggle</h2>
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
          <h1 class="text-left">Description</h1>
          <h2 class="text-left">Checkbox Toggle</h2>
          <p class="text-left">
            Checkbox, that will show the content with inputs and confirmation button.
          </p>
          <div class="codes-plus-text-container">
            <div class="codes-container text-left">
              <div class="width-30">
                <p>HTML:</p>
                <pre class="text-left">
                  <code class="text-left">
&lt;input
  type="checkbox"
  id="donate-checkbox"
  onchange="toggleDiv()"&gt;
&lt;label for="donate-checkbox"&gt;
  I want to donate
&lt;/label&gt;
&lt;div
  id="content"
  style="display: none;"&gt;
&lt;/div&gt;
              </code>
              </pre>
              </div>

              <div class="width-30">
                <p>JavaScript:</p>
                <pre class="text-left">
              <code>
function toggleDiv() {
  var x = document.getElementById('content');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
              </code>
              </pre>
              </div>
          </div>
          </div>




          <h2 class="text-left">Address</h2>
          <p class="text-left">
            You can implement list of charities from which user can select (it's possible to use list from our site), or you can allow user to add address.
          </p>
          <div class="codes-plus-text-container">
            <div class="codes-container text-left">
              <div class="width-30">
                <p>HTML:</p>
                <pre class="text-left">
                  <code class="text-left">
&lt;div
  id="content"
  style="display: none;"&gt;
&lt;/div&gt;
&lt;input type="text" id="addressInput"&gt;
&lt;button onclick="addAddress()"&gt;
  Add Address
&lt;/button&gt;
&lt;ul id="addressList"&gt;&lt;/ul&gt;
              </code>
              </pre>
              </div>

              <div class="width-30">
                <p>JavaScript:</p>
                <pre class="text-left">
              <code>
function addAddress() {
  const input = document.getElementById('addressInput');
  const address = input.value;

  const listItem = document.createElement('li');
  listItem.textContent = address;

  const addressList = document.getElementById('addressList');
  addressList.appendChild(listItem);

  input.value = '';
}
              </code>
              </pre>
              </div>
            </div>
          </div>




          <h2 class="text-left">Amount</h2>
          <p class="text-left">
            You can have checkbox for default amount, also allow put custom.
          </p>

          <h2 class="text-left">Crypto currency</h2>
          <p class="text-left">
            DAI
          </p>

          <h2 class="text-left">Address</h2>
          <p class="text-left">
            You can implement list of charities from which user can select (it's possible to use list from our site), or you can allow user to add address.
          </p>





        </div>
      </section>
      <section id="section3">
        <div class="charity-list-div">
          <h1>Charity list</h1>
          <div>
            <h3>Hunger and poverty:</h3>
            <div>
              <a href="https://www.heifer.org/give/other/digital-currency.html">Heifer International</a>
              <p>
                - Help communities become the drivers of their own change to end hunger and poverty in Africa, Asia, Americas.
                mainnet only: 0xE04063602B8b6B5d3526e6af873d2A4777E12d92
              </p>
              <a href="https://www.graceaid.org.uk/donations/">GRACEaid</a> - <a href="https://github.com/GRACEaid/Refugee-Smart-Contract/blob/master/README.md">Donations</a>
              <p>
                - for refugees and destitute families both within UK and internationally.
                mainnet only: 0xc1D5FD1F0D969075040988e37Df3643Af724995D
              </p>
            </div>

            <h3>Health care:</h3>
            <div>
              <a href="https://www.sens.org/donate/">SENS Research Foundation</a>
              <p>
                Fights the diseases of aging (Vitalik donated here, 501c3 non-profit).
                mainnet only: 0x542EFf118023cfF2821b24156a507a513Fe93539
              </p>
            </div>
            <h3>Climate:</h3>
            <div>
              <a href="https://rainforestfoundation.org/engage/give/cryptocurrency/">Rainforest Foundation US</a>
              <p>
                Rainforest Foundation US
                mainnet only: 0x338326660F32319E2B0Ad165fcF4a528c1994aCb
              </p>
            </div>
            <h3>Ukraine:</h3>
            <div>
              <a href="https://etherscan.io/address/0x165CD37b4C644C2921454429E7F9358d18A45e14">Ukraine</a>
              <p>optimism: 0x165CD37b4C644C2921454429E7F9358d18A45e14</p>
              <a href="https://www.notion.so/UkraineDAO-eth-Treasury-b080b59f794848fa8f6ac1b22575792c?pvs=21">Ukraine DAO</a>
              <p>
                optimism (little bit): <a href="https://etherscan.io/address/0x633b7218644b83d57d90e7299039ebab19698e9c">0x633b7218644b83d57d90e7299039ebab19698e9c</a>
              </p>
            </div>
            <h3>Iran:</h3>
            <div>
              <a href="https://www.iranunchained.com/">Iran Unchained</a>
              <a href="https://www.iranunchained.com/grants/bafkreiaayldpo7f3whoxspezqdzh6iotvkuqvzcmucnycfkkphfocfg5qy/details">Humanitarian Aid For Iran</a>
              <p>mainnet only: 0x7f94df3b2cf85322ea132255d3ce120bd0cf43a4</p>
            </div>
          </div>
        </div>
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

ul, .menu-div {
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
  padding: 1rem 3rem 2rem 3rem;
}

.charity-list-div {
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

li, button {
  display: flex;
  justify-content: center;
  background: #FFFFFF;
  box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.5);
  border-radius: 28px;
  padding: 0.5rem 1rem;
}

li:hover, button:hover {
  background: #6ab3c3;
}

li a {
  color: #2c3e50;
  text-decoration: none;
}

nav button.active, nav li.active {
  background: #76c4d5;
}

.width-30 {
  width: 30rem;
}
.codes-plus-text-container {
  display: flex;
  flex-direction: column;
}
.codes-container {
  display: flex;
}
</style>
