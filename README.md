# NISER App

This is a basic utility app designed for students at the National Institute of Science Education and Research (NISER). The app provides various features to make campus life more organized and accessible, including:

- **Lost and Found**: Report and search for lost items.
- **Archive**: Store notes and question papers of courses.
- **Listings**: Create and browse buy/sell ads.

---

## Project Setup

### Prerequisites
- Python 3.9+ 
- Git
- nodejs v21.5.0+

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sdgniser/app
   ```

2. **Navigate to the Project Directory**
   ```bash
   cd app
   ```

3. **Set Up a Virtual Environment**
   To create a virtual environment, run

   ```bash
   python -m venv .venv
   ```

   Run the following command to enter the virtual environment

   ```bash
   source .venv/bin/activate
   ```

   If you are using a windows system, use this instead:

   ```plaintext
   .\.venv\Scripts\activate
   ```


4. **Install Dependencies**
   Ensure you are in the `backend` directory and then install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

5. **Installing Frontend**
   Ensure you are in the `frontend` directory and then run the following command:

   ```bash
   npm i
   ```

6. **Build the App**
   Ensure that you are in the root directory and then run the `buildapp.sh`

   ```bash
   chmod +x buildapp.sh
   ./buildapp.sh
   ```

7. **Run the Application**
   If all the above steps worked without errors, start the development server:

   ```bash
   python manage.py runserver
   ```

   The app should now be accessible at `http://127.0.0.1:8000`.

---

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request detailing the changes.

---

### Contact
For any queries or feedback, please reach out to the team via discord: https://discord.gg/w2bSsQkBTe
