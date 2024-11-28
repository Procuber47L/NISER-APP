from django.db import models
from django.core.mail import mail_admins
from authtools.models import User
from django.utils import timezone

gender_choices = [
    ("M", "Male"),
    ("F", "Female"),
    ("O", "Others"),
    ("---", "---")
]

program_choices = [
    ("M.Sc", "M.Sc"),
    ("Ph.D", "Ph.D"),
    ("PostDoc", "PostDoc"),
    ("Others", "Others"),
    ("---", "---"),
]

class School(models.Model):
    abbr = models.CharField(max_length = 5)  # abbreviation of the school
    name = models.CharField(max_length = 256)  # full name of the school
    appr = models.BooleanField(default=False)  # approval status of the school

    def __str__(self):
        return self.name + ' ('+ self.abbr.upper() + ')'

class Batch(models.Model):
    name = models.IntegerField()  # last two digits of the year of joining
    def __str__(self):
        return "B" + str(self.name)

class Course(models.Model):
    op = models.ForeignKey("Profile", on_delete=models.SET_NULL, null=True)  # person who suggested the opening of the course
    code    = models.CharField('Code', max_length=6, unique=True)  # 4-6 digit course code
    name    = models.CharField('Name', max_length=128)  # name of the course (can contain spaces)
    school  = models.ForeignKey(School, on_delete=models.CASCADE)  # school in which the course is offered
    appr = models.BooleanField(default=False)  # approval status of the course

    def __str__(self):
        return (self.code.upper() + ' - ' + self.name)

    def save(self, *args, **kwargs):
        if not self.appr:
            mail_admins(
                subject = 'New Course Needs Approval.',
                message = f'A new course "{self}" was added by {self.op} on the NISER Archive. It is pending approval.')

        super().save(*args, **kwargs)

class Profile(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    dp = models.ImageField(upload_to='static/profile_pictures', default="/static/profile_pictures/anonymous.png")
    vid = models.CharField(max_length=64, null=True)
    ip = models.GenericIPAddressField(null=True)
    joined = models.DateTimeField(default=timezone.now)
    data = models.TextField(max_length=2048, null=True, blank=True)
    school = models.ForeignKey(School, blank=True, null=True, on_delete=models.SET_NULL)
    batch = models.ForeignKey(Batch, blank=True, null=True, on_delete=models.SET_NULL)
    prog = models.CharField('Program', choices=program_choices, max_length=16, blank=True, default='')
    about = models.TextField('About', max_length=2048, blank=True, default='')
    karma = models.IntegerField(default=0)
    gender = models.CharField(max_length=16, choices=gender_choices, default="---")

    # Disabling it, re enable it when needed (in future, when we implement timetable generator)
    # courses = models.ManyToManyField("Course", blank=True)
    
    def __str__(self):
        return self.user.name