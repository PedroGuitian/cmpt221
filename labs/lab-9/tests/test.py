import pytest

from sqlalchemy import insert, select, text
from models import User

# Test 1: Verifies that the database connection is working
# test db connection
def test_db_connection(db_session):
    # Use db_session to interact with the database
    result = db_session.execute(text("SELECT 1"))
    assert result.scalar() == 1

# Test 2: Verifies that the data is correctly saved and retrievable
def test_insert_user(db_session, sample_signup_input):
    insert_stmt = insert(User).values(sample_signup_input)

    # execute insert query
    db_session.execute(insert_stmt)
    # commit the changes to the db
    db_session.commit()

    # not part of the app.py code, just being used to get the inserted data
    selected_user = db_session.query(User).filter_by(FirstName="Calista").first()

    assert selected_user is not None
    assert selected_user.LastName == "Phippen"


# Test 3: Login with Invalid Credentials
def test_login_invalid_no_client(db_session, sample_login_input):
    # Step 1: Ensure no user exists in the database with the provided email
    submitted_email = sample_login_input['Email']
    submitted_password = sample_login_input['Password']

    # Query the database to find a user with the provided email
    query = select(User.Password).where(User.Email == submitted_email)
    user_password = db_session.execute(query).fetchone()  # Should return None since no user is added

    # Step 2: Simulate login logic without Flask
    if user_password is None or user_password[0] != submitted_password:
        # Invalid login scenario
        login_success = False
    else:
        # This shouldn't happen since we expect the credentials to fail
        login_success = True

    # Step 3: Assert the behavior
    assert not login_success  # The login should fail

# Test 4: Retrieve a user that does not exist (will fail)
def test_retrieve_nonexistent_user(db_session):
    # Try to retrieve a user that does not exist
    non_existent_user = db_session.query(User).filter_by(FirstName="NonExistent").first()

    # Assert that the user exists (this will fail)
    assert non_existent_user is not None  # Intentional failure

# Test 5: Verify user data with a specific email
def test_verify_user_email(db_session, sample_signup_inpu):
    # Insert a user into the database
    insert_stmt = insert(User).values(sample_signup_input)
    db_session.execute(insert_stmt)
    db_session.commit()

    # Query for the inserted user by email
    selected_user = db_session.query(User).filter_by(Email=sample_signup_input['Email']).first()

    # Assert that the user's email matches
    assert selected_user is not None
    assert selected_user.Email == sample_signup_input['Email']