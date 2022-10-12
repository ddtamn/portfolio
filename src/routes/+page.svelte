<script>
    import '$lib/global.css'
    import Header from '$lib/Header.svelte';
    import Jumbotron from '$lib/Jumbotron.svelte';
    import Fa from 'svelte-fa'
    import {faInstagram ,faGithub, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons/index'
</script>
<main>
    <Header/>
    <div class="socials">
        <ul>
            <li>
                <a href="#a"><Fa icon={faInstagram}/></a>
            </li>
            <li>
                <a href="#a"><Fa icon={faGithub}/></a>
            </li>
            <li>
                <a href="#a"><Fa icon={faFacebook}/></a>
            </li>
            <li>
                <a href="#a"><Fa icon={faTwitter}/></a>
            </li>
        </ul>
    </div>
    <Jumbotron/>
    <section>
        <h1>About</h1>
    </section>
</main>

<style>
    .socials {
        position: fixed;
        height: 100vh;
        left: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 1rem;
        opacity: 0.7;
    }

    .socials::before {
        content: '';
        position: absolute;
        width: 100px;
        height: 1px;
        background-color: var(--font-color);
        transform: rotate(-90deg);
        bottom: 25%;
    }

    ul {
        list-style: none;
    }

    li {
        margin-bottom: 2rem;
    }

    a {
        color:  var(--font-color);
    }

   


</style>