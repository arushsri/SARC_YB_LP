import csv
import django
import os

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "yash.settings")  # change if your settings file has a different name
django.setup()

from response.models import userResponse
from django.conf import settings
from django.db import connection

settings.DATABASES['default']['NAME'] = os.path.abspath('db.sqlite3')

with open('registration_finally.csv', 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow([
        'Fullname', 'YearbookId', 'Email', 'RollNumber', 'PhoneNumber', 'AlterPhoneNumber', 'LDAP', 'Department', 'Degree', 'Typeofcopy', 'Address', 'Ncopies', 'OtherSelectedPeople', 'Comments'
    ])

    for r in userResponse.objects.all():
        writer.writerow([
            r.fullname,
            r.yearbookId,
            r.email,
            r.roll,
            r.phone,
            r.alternateMobileNo,
            r.ldap,
            r.department,
            r.degree,
            r.typeofcopy,
            r.address,
            r.ncopies,
            r.otherSelectedPeople,
            r.comments
        ])

print("DB path being used:", connection.settings_dict['NAME'])