File.open("./fontAwesome.js", "w") do |file|
  file.write("$(function() {\n\n")

  file.write("    //Wait for Pinegrow to wake-up\n");
  file.write("    $('body').one('pinegrow-ready', function(e, pinegrow) {\n\n");

  file.write("        //Create new Pinegrow framework object\n");
  file.write("        var f = new PgFramework('fontAwesome', 'fontAwesome');\n\n");

  file.write("        //This will prevent activating multiple versions of this framework being loaded\n");
  file.write("        f.type = 'fontAwesome';\n");
  file.write("        f.allow_single_type = true;\n");
  file.write("        f.user_lib = true;\n\n");

  file.write("        var comp_comp1 = new PgComponentType('comp1', 'fa');\n");
  file.write("        comp_comp1.code = '<span class=\"fa\">Icon</span>';\n");
  file.write("        comp_comp1.parent_selector = null;\n");
  file.write("        f.addComponentType(comp_comp1);\n\n");

  i = 2
  comps = ["comp_comp1"]
  File.open("./fontAwesome-IconsNames.txt", "r") do |infile|

    while (class_name = infile.gets)
      class_name = class_name.gsub(/\n/, "")
      file.write("        var comp_comp#{i} = new PgComponentType('comp#{i}', '#{class_name}');\n");
      file.write("        comp_comp#{i}.code = '<span class=\"fa fa-#{class_name}\"></span>';\n");
      file.write("        comp_comp#{i}.parent_selector = null;\n");
      file.write("        f.addComponentType(comp_comp#{i});\n\n");
      comps << "comp_comp#{i}"
      i += 1
    end

  end

  file.write("        //Tell Pinegrow about the framework\n");
  file.write("        pinegrow.addFramework(f);\n\n");

  file.write("        var section = new PgFrameworkLibSection('fontAwesome_lib', 'Components');\n");
  file.write("        //Pass components in array\n");
  file.write("        section.setComponentTypes([#{comps.join(', ')}]);\n\n");

  file.write("        f.addLibSection(section);\n");

  file.write("    });\n")
  file.write("});")
end