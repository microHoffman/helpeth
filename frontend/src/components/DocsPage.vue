<template>
  <div class="d-flex">
    <nav>
      <ul>
        <li><a href="#section1">Introductions</a></li>
        <li><a href="#section2">Examples</a></li>
        <li><a href="#section3">Dev info</a></li>
      </ul>
    </nav>
    <div>
      <section id="section1">
        <h1 class="text-left">Introduction</h1>
        <div class="text-left">
          <p>
            HelpETH enables users to support public goods effortlessly while engaging in their regular transactions. Whether you're swapping tokens or purchasing goods, HelpETH offers a convenient and secure way to donate to charity.
          </p>
          <p>
            The primary use case of HelpETH is integrating philanthropy into everyday activities. Users can contribute to charitable causes simply by performing transactions. Whether purchasing items online or participating in decentralized exchanges, HelpETH empowers users to make a positive impact effortlessly.
          </p>
          <p>
            HelpETH integrates easily into web3 applications with a few lines of code. Apps can import HelpETH and direct donations to a charity address of their choice, whether permanent or temporary for events like Earth Day.
          </p>
          <p>
            Users can add $2.5 USD or a custom amount to each transaction, automatically supporting public goods without a second transaction. This aligns economic decisions with values.
          </p>
          <p>
            HelpETH ensures secure and transparent donations deployed on Optimism. Donors can verify donation destinations immediately, boosting confidence and encouraging philanthropy.
          </p>
          <p>
            In summary, HelpETH revolutionizes philanthropy by integrating it into everyday transactions. Supporting public goods while swapping tokens or engaging in web3 activities allows users to make a tangible difference. HelpETH empowers individuals to align their financial decisions with their values, fostering a culture of giving and accessible positive change.
            Challenges we ran into
          </p>
          <p>
            We wanted to implement account abstraction to simplify transactions. We have been searching for a smooth-working solution, and thus, we extended Pimlico's ERC20 Paymaster contract. This extension enables the remaining amount, after paying for gas, to be sent to a user different from the transaction sender.
          </p>
        </div>
      </section>
      <section id="section2">
        <h1>Examples</h1>
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
      </section>
      <section id="section3">
        <h1>Dev info</h1>
      </section>
    </div>
  </div>
</template>

<script setup>

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
</style>