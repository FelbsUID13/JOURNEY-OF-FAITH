document.addEventListener('DOMContentLoaded', function() {
    const rosaryButton = document.getElementById('Rosarybutton');
    const rosaryPopup = document.getElementById('rosaryPopup');
    const closePopup = document.getElementById('closePopup');
    const mysteryContent = document.getElementById('mysteryContent');
    const closeMysteryContent = document.getElementById('closeMysteryContent');
    const mysteryTitle = document.getElementById('mysteryTitle');
    const mysteryDescription = document.getElementById('mysteryDescription');
    const rosaryBtns = document.querySelectorAll('.rosary-btn');

    const mysteryContents = {
        sorrowful: {
            title: "SORROWFUL MYSTERIES (Tuesday and Friday)",
            content: `
                <p>In the name of the Father of the Son and of the Holy Spirit. Amen</p>
                
                <h3>Apostles' Creed</h3>
                <p>I believe in God the Father Almighty, Creator of heaven and earth; and in Jesus Christ, His only Son, our Lord; Who was conceived by the Holy Ghost, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried. He descended into hell. On the third day He arose again; He ascended into heaven,and sitteth at the right hand of God, the Father Almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Ghost, the Holy Catholic Church, the communion of saints, the forgivness of sins, the resurrection of the body, and life everlasting. Amen</p>
                
                <h3>Opening Prayers</h3>
                <p>Then say 1 "Our Father", 3 "Hail Mary's" for the virtues of Faith, Hope and Charity; and then 1 "Glory Be":</p>
                
                <p>Our Father, Who art in heaven, Hallowed be Thy Name. Thy Kingdom come, Thy Will be done, On earth as it is in Heaven. Give us this day, our daily bread, And forgive us our trespasses, as we forgive those who trespass against us. And lead us not into temptation, but deliver us from evil.</p>
                
                <p>Hail Mary, Full of Grace, The Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners now, and at the hour of death.</p>
                
                <p>Glory Be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end.</p>
                
                <h3>The Five Sorrowful Mysteries</h3>
                
                <h4>1st Sorrowful Mystery - The Agony in the Garden</h4>
                <p>Our Father... (1 time)</p>
                <p>Hail Mary... (10 times)</p>
                <p>Glory be to the Father...</p>
                <p>"O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to Heaven, especially those in most need of Your Mercy". Amen.</p>
                
                <h4>2nd Sorrowful Mystery - The Scourging at the Pillar</h4>
                <p>Our Father... (1 time)</p>
                <p>Hail Mary... (10 times)</p>
                <p>Glory be to the Father...</p>
                <p>"O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to Heaven, especially those in most need of Your Mercy". Amen.</p>
                
                <h4>3rd Sorrowful Mystery - Crowning with Thorns</h4>
                <p>Our Father... (1 time)</p>
                <p>Hail Mary... (10 times)</p>
                <p>Glory be to the Father...</p>
                <p>"O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to Heaven, especially those in most need of Your Mercy". Amen.</p>
                
                <h4>4th Sorrowful Mystery - Carrying of the Cross</h4>
                <p>Our Father... (1 time)</p>
                <p>Hail Mary... (10 times)</p>
                <p>Glory be to the Father...</p>
                <p>"O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to Heaven, especially those in most need of Your Mercy". Amen.</p>
                
                <h4>5th Sorrowful Mystery - The Crucifixion</h4>
                <p>Our Father... (1 time)</p>
                <p>Hail Mary... (10 times)</p>
                <p>Glory be to the Father...</p>
                <p>"O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to Heaven, especially those in most need of Your Mercy". Amen.</p>
                
                <h3>Concluding Prayers</h3>
                <h4>Hail Holy Queen</h4>
                <p>Hail, holy Queen, Mother of Mercy! our life, our sweetness, and our hope! To thee do we cry, poor banished children of Eve; to thee do we send up our sighs, mourning and weeping in this valley, of tears. Turn, then, most gracious Advocate, thine eyes of mercy toward us; and after this our exile show unto us the blessed fruit of thy womb, Jesus; O clement, O loving, O sweet Virgin Mary.</p>
                <p>Pray for us, O Holy Mother of God.</p>
                <p>That we may be made worthy of the promises of Christ.</p>
                
                <h4>Litany of the Rosary of the Blessed Virgin Mary</h4>
                <p>(Full litany text...)</p>
                
                <h4>Final Prayer</h4>
                <p>Let us pray. Grant, we beseech thee, O Lord God, that we, your servants, may enjoy perpetual health of mind and body; and by the intercession of the Blessed Mary, ever Virgin, may be delivered from present sorrow, and obtain eternal joy. Through Christ our Lord. Amen.</p>
                
                <p>We end the Holy Rosary by saying:<br>
                In the Name of the Father, and of the Son and of the Holy Spirit. Amen</p>
            `
        },

        // Add other mysteries (joyful, glorious, luminous) here in a similar structure
    };

    rosaryButton.addEventListener('click', function(e) {
        e.preventDefault();
        rosaryPopup.style.display = 'block';
    });

    closePopup.addEventListener('click', function() {
        rosaryPopup.style.display = 'none';
    });

    closeMysteryContent.addEventListener('click', function() {
        mysteryContent.style.display = 'none';
    });

    rosaryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const mystery = this.dataset.mystery;
            const content = mysteryContents[mystery];
            mysteryTitle.textContent = content.title;
            mysteryDescription.innerHTML = content.content;
            rosaryPopup.style.display = 'none';
            mysteryContent.style.display = 'block';
        });
    });
});
