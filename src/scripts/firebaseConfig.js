function renderConfig(){
    // var config = {
    //     apiKey: "AIzaSyD4msZsJtvCDVFPVthtLHnzJ1XPOf15B88",
    //     authDomain: "chesson-b9447.firebaseapp.com",
    //     databaseURL: "https://chesson-b9447.firebaseio.com",
    //     projectId: "chesson-b9447",
    //     storageBucket: "chesson-b9447.appspot.com",
    //     messagingSenderId: "740993174398"
    // };
    // let fireCon = firebase.initializeApp(config);
    // 
    let script = document.createElement('script');
    script.setAttribute("src", "https://www.gstatic.com/firebasejs/5.0.2/firebase.js");
    // script.appendChild(fireCon);
    url.appendChild(script);
    // Initialize Firebase
    let url = document.getElementById('configTag');
    url.innerHTML = `
        <script>
            var config = {
                apiKey: "AIzaSyD4msZsJtvCDVFPVthtLHnzJ1XPOf15B88",
                authDomain: "chesson-b9447.firebaseapp.com",
                databaseURL: "https://chesson-b9447.firebaseio.com",
                projectId: "chesson-b9447",
                storageBucket: "chesson-b9447.appspot.com",
                messagingSenderId: "740993174398"
            };
            firebase.initializeApp(config);
        </script>
    `
}
// renderConfig();
