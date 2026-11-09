import pyodbc

def get_connection():
    connection = pyodbc.connect(
        "DRIVER={ODBC Driver 18 for SQL Server};"
        "SERVER=LAPTOP-SUQUEOVE\\SQLEXPRESS;"
        "DATABASE=CareerSkillGapDB;"
        "Trusted_Connection=yes;"
        "TrustServerCertificate=yes;"
    )

    return connection


if __name__ == "__main__":
    try:
        conn = get_connection()
        print("Database connected successfully!")

        cursor = conn.cursor()
        cursor.execute("SELECT DB_NAME()")

        print("Connected Database:", cursor.fetchone()[0])

        conn.close()

    except Exception as e:
        print("Database connection failed:", e)