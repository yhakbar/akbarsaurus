---
title: Setting Up CI
author: Yousif Akbar
author_url: https://github.com/yhakbar
author_image_url: https://avatars.githubusercontent.com/u/11247449?s=400&u=f7d0e5d0d23bc0eab8d3f88adfa0367eeb5772d6&v=4
tags: [docusaurus]
description: Setting up CI for a site built using Docusaurus.
hide_table_of_contents: false
---

<<<<<<< HEAD
I demonstrated in [yesterday's blog][yesterday], the simple process of setting up Docusaurus to be run locally.
=======
In [yesterday's blog][yesterday], the simple process of setting up Docusaurus to be run locally was demonstrated.
>>>>>>> d728ea62f1d3bca502035c72787609adbda3bb10

Today we're going through the process of getting this thing running in the cloud.

Amplify can usually guess a lot of what needs to be done to render a site by default, so I just went through the getting started workflow for Amplify.

## Getting Started

![Amplify Getting Started][amplify-getting-started]

After clicking `GET STARTED`, we'll be presented with a choice between develop and deliver.

![Amplify Develop or Deliver][amplify-develop-or-deliver]

We're basically choosing between getting started with the backend or the frontend.

Because we're looking for Amplify to provide front-end hosting for this static site, we'll select the deliver `Get started` button.

## Source Selection

Once the deliver option is selected, a dialog box allows for selection of a repo.

![Amplify Source Selection][amplify-source]

Amplify will then have a login box pop-up for the source selected, and once authentication is completed, a little success banner shows up.

The repo selection dropdown sorts repos by recently updated, which is pretty convenient.

I'll select this repo, `yhakbar/akbarsaurus`, on the `main` branch and continue.

![Amplify Source Selected][amplify-source-selected]

## Continuous Integration

Next, there's a dialog box to go through to confirm or correct build configurations for the CI.

![Amplify App Build Settings][amplify-build-settings]

Note the warning that pops up on line 11. This usually happens when Amplify can't work out what type of app this is, and therefore doesn't know where to copy builds from.

The default here assumes that the root of the directory is going to be used as the build target, which is incorrect for our purposes. Upon running `npm install` to install dependencies and `npm run build`, we'll have a `build` directory populated with the flat files that we want served from CloudFront.

To edit this, we can just click the `Edit` button on the right.

![Amplify App Edit Build Settings][amplify-edit-build-settings]

Once we hit save, the yaml configuration file is saved in the Amplify console, and when we push up any code changes, Amplify will copy in the `build` directory instead of using the root of the repo.

![Amplify App Edit Build Settings Confirmation][amplify-edit-build-settings-confirmation]

Submitting the form, and confirming our choices completes app creation.

## Amplify Dashboard

We now have a dashboard for the app that displays the build progress of the branches we have connected to Amplify.

![Amplify Dashboard][amplify-dashboard]

While the build is proceeding, it can be useful to click the dropdown above the branches dashboard to see what simple steps can be taken to enhance the app.

![Amplify Learn][amplify-learn]

## Domain Management

Selecting the blue link starting with "Add a custom domain" or selecting the `Domain management` option from the left hand panel brings up a domain management panel.

![Amplify Domain Management][amplify-domain-management]

Initially, we'll just see an amplifyapp.com domain that points to our app. Clicking the `Add domain` button will take us to a dialog box that lets us select the hosted zone where DNS configuration for this domain is going to take place. The options are automatically populated with the hosted zones present within the current account.

![Amplify Add Domain][amplify-add-domain]

Clicking `Configure domain` allows for input of extra details necessary to finalize the domain registration.

![Amplify Add Domain Configure][amplify-add-domain-configure]

This lets me select akbarsaurus.yakbar.dev as the domain for this app, and once the form is submitted, we can see a status page showing the progress of:

1. Registering the CNAME for the akbarsaurus.yakbar.dev domain in the Route 53 hosted zone yakbar.dev.
2. Registering an ACM certificate for the domain being used.
3. Updating the CloudFront CDN with the extra alias and the ACM certificate.

All of this, including the initial setup of the static site is handled automatically outside of our AWS account by Amplify.

This is what it looks like when the registration is complete:

![Amplify Domain Confirmation][amplify-domain-confirmation]

The domain is now available at the URL you using to view this site.

## Updating Site

To update the site, all we have to do is push up a new commit. [This commit][docs-rewording], updating the wording in a markdown file, being pushed to `main` automatically triggered a rebuild of this site, updating the [documentation home page][docs-home-page].

![Amplify CI Triggered][amplify-ci-triggered]

## Feature Branches

Occasionally, instead of pushing directly to `main`, you'll want to create a feature branch, have it reviewed, then merge it in.

Let's try that out. I'll push up my current progress on this blog post, then connect it to Amplify.

```bash
git checkout -b feature/adding_ci_blog_post
git add .
git commit -m "Adding CI blog post"
git push -u origin feature/adding_ci_blog_post
```

![Amplify Add Branch][amplify-add-branch]

Branches will appear in the dropdown on the Amplify console in descending order of when they last received commits.

![Amplify Branch Confirmation][amplify-add-branch-confirmation]

Review the configuration you have selected, then hit `Save and deploy`.

![Amplify Feature Environment][amplify-feature-environment]

Upon configuring the feature branch, a separate environment is provisioned in the Amplify console, associated with that branch.

![Amplify Feature Environment Complete][amplify-feature-environment-complete]

Once complete, a separate environment will be available for you to test out the feature.

![Feature Environment Screenshot][feature-environment-screenshot]

## PR Previews

In addition to manually added environments in the Amplify console, a setting can be enabled that allows for environments to be generated for pull requests. This setting can be found in the left hand panel as "Previews".

![Amplify PR Preview Setting][amplify-pr-preview-setting]

Enabling this setting installs a GitHub app on the repo, and adds behavior visible without accessing Amplify directly.

![Amplify PR Preview Enabled][amplify-pr-preview-enabled]

This GitHub check is visible on the PR, and doesn't require any interaction with AWS to configure. It is present whenever a pull request is created on a branch that has PR previews enabled.

The `Details` link on the right side of the check links to the check that is run whenever a PR is created or updated.

![GitHub Check][github-check]

The `View more details on AWS Amplify` link on the right side of the check links to the environment that is created to demonstrate the changes specific to this PR.

![View More Details][view-more-details]

![PR Environment][pr-env]

## Wrapping Up CI

This post has run on a little long. Hopefully this demonstrates some of the capabilities present in getting an app hosted and continuously updated using Amplify.

Note the little pencil link at the bottom left here, with the text `Edit this page`.

This is a convenient feature of the default theme on Docusaurus that allows for a link to be placed on each piece of documentation or blog post. It will pull up the GitHub UI for editing files in the browser.

Feel free to use this functionality if you find anything amiss in these posts!

[yesterday]: /blog/2021/06/12/trying-out-docusaurus
[amplify-getting-started]: /img/amplify-getting-started.png
[amplify-develop-or-deliver]: /img/amplify-develop-or-deliver.png
[amplify-source]: /img/amplify-source.png
[amplify-source-selected]: /img/amplify-source-selected.png
[amplify-build-settings]: /img/amplify-build-settings.png
[amplify-edit-build-settings]: /img/amplify-edit-build-settings.png
[amplify-edit-build-settings-confirmation]: /img/amplify-edit-build-settings-confirmation.png
[amplify-dashboard]: /img/amplify-dashboard.png
[amplify-learn]: /img/amplify-learn.png
[amplify-domain-management]: /img/amplify-domain-management.png
[amplify-add-domain]: /img/amplify-add-domain.png
[amplify-add-domain-configure]: /img/amplify-add-domain-configure.png
[amplify-domain-confirmation]: /img/amplify-domain-confirmation.png
[docs-rewording]: https://github.com/yhakbar/akbarsaurus/commit/c7b6dcc1e75b6bcc0504d0d74fa5f60536229027
[docs-home-page]: /docs/
[amplify-ci-triggered]: /img/amplify-ci-triggered.png
[amplify-add-branch]: /img/amplify-add-branch.png
[amplify-add-branch-confirmation]: /img/amplify-add-branch-confirmation.png
[amplify-feature-environment]: /img/amplify-feature-environment.png
[amplify-feature-environment-complete]: /img/amplify-feature-environment-complete.png
[feature-environment-screenshot]: /img/feature-environment-screenshot.png
[amplify-pr-preview-setting]: /img/amplify-pr-preview-setting.png
[amplify-pr-preview-enabled]: /img/amplify-pr-preview-enabled.png
[github-check]: /img/github-check.png
[view-more-details]: /img/view-more-details.png
[pr-env]: /img/pr-env.png
