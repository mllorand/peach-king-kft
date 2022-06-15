from flask import Flask, render_template, url_for

app = Flask(__name__)


def main():
    app.run(debug=True)


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == '__main__':
    main()
