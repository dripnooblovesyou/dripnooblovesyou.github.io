from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/conference")
def conference():
    return render_template("conference.html")

@app.route("/committees")
def committees():
    return render_template("committees.html")

@app.route("/registration")
def registration():
    return render_template("registration.html")

@app.route("/resources")
def resources():
    return render_template("resources.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

if __name__ == "__main__":
    app.run(debug=True)