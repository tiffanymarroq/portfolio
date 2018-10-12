<template>
    <div class="about-page">
        <h1>About Me</h1>
        <p>Hello, I'm a developer from NYC. Graduated from Binghamton University with a 
        degree in Mathematics. Like most graduates, or just me, I did not have a specific path I wanted to do as a career.
        At the end of 2017, I decided to take it upon myself to learn web development/applications. To push myself in the field, I decided to work as a freelance developer.
        And Here we are!</p>
        <h1>Things I know</h1>
        <ul>
            <li>Node JS</li>
            <li>Vue</li>
            <li>React</li>
            <li>CSS/SCSS</li>
            <li>Gulp Workflow</li>
            <li>JS</li>
        </ul>
        <ul>
            <li>Marketing Strategies</li>
            <li>Data Collecting</li>
            <li>Management</li>
            <li>Teamwork</li>
        </ul>
        <h1>Projects</h1>
        <h1>fun facts</h1>
        <p>Dog lover</p>
        <p>Tea Drinker</p>
        <p>Long walks on the beach</p>
        <p>nights in > nights out</p>
        
        <h1>Want to know more?</h1>
        <p>Ask me! </p>

        <p>Thanks for stopping by!</p>
        <p>Have a great {{getDay()}}</p>
        <em>social media</em>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            days: [
                'Sunday',
                 'Monday',
                 'Tuesday',
                 'Wednesday',
                 'Thursday',
                 'Friday',
                 'Saturday'
                ]
                
            
        }

    },
    methods: {
        getDay(){
            let today = new Date();
            return( this.days[today.getDay()]);
        }
    }
}
</script>

<style scoped>
    .about-page{
        text-align: center;
        padding: 30px;
    }
</style>

