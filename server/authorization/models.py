from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class UserManager(BaseUserManager):
  def create_user(self, username, email, password=None, **extra_fields):
    if not email:
        raise ValueError('The Email field must be set')
    email = self.normalize_email(email)
    user = self.model(username=username, email=email, **extra_fields)
    user.set_password(password)
    user.save(using=self._db)
    return user

  def create_superuser(self, username, email, password=None, **extra_fields):
    extra_fields.setdefault('is_staff', True)
    extra_fields.setdefault('is_superuser', True)

    return self.create_user(username, email, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
  ROLES = (
    ('admin', 'ADMIN'),
    ('user', 'USER')
  )

  first_name = models.CharField(max_length=30)
  last_name = models.CharField(max_length=30)
  username = models.CharField(max_length=30, unique=True)
  email = models.EmailField(unique=True)
  role = models.CharField(max_length=10, choices=ROLES, default='user')
  is_active = models.BooleanField(default=True)
  is_staff = models.BooleanField(default=False)
  user_level = models.IntegerField(default=1)

  objects = UserManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['username']

  groups = models.ManyToManyField(
    'auth.Group',
    related_name='customuser_set',
    related_query_name='customuser',
    blank=True,
    verbose_name='groups',
  )
  user_permissions = models.ManyToManyField(
    'auth.Permission',
    related_name='customuser_set',
    related_query_name='customuser',
    blank=True,
    verbose_name='user permissions',
  )

  def __str__(self):
    return self.username
