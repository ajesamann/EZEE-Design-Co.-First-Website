 <?php
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $mailFrom = $_POST['mail'];
        $message = $_POST['message'];
        $phone = $_POST['phone'];
        $timeline = $_POST['timeline'];
        $budget = $_POST['budget'];

        $mailTo = 'info@ezeedesignco.com';
        $headers = "Reply-to: ".$mailFrom;
        $txt = "New inquiry from: ".$name."\n\n"."Phone number: ".$phone."\n\n"."Timeline: ".$timeline."\n\n"."Budget: ".$budget."\n\n"."Message: ".$message;

        mail($mailTo, $subject, $txt, $headers);
        print '<meta http-equiv="refresh" content="0;URL=http://ezeedesignco.com/success.html' .$_SERVER['QUERY_STRING'].'">';
    }





 ?>
