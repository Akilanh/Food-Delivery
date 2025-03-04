# Generated by Django 5.1.6 on 2025-02-08 08:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FoodList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, null=True)),
                ('discription', models.TextField(max_length=200, null=True)),
                ('image', models.ImageField(null=True, upload_to='images/')),
                ('category', models.CharField(max_length=50, null=True)),
                ('price', models.IntegerField(default=0)),
            ],
        ),
    ]
